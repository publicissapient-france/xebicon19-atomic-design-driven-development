theme: XebiCon19
slidenumbers: true
slide-dividers: #

# Atomic Design Driven Development

![original](assets/xebicon19-background.png)

[.header: #FEFEFE, alignment(center), line-height(1), Oswald]
[.slidenumbers: false]
[.footer-style: #FEFEFE, alignment(right)]
[.footer: XebiCon19 | @XebiConFr | #XebiCon19]

# Qui sommes-nous ?

![left filtered](assets/benjamin-lacroix.jpg)

*Benjamin* Lacroix
Développeur fullstack
6 ans à Xebia

[.footer-style: #FEFEFE, alignment(left)]
[.footer: @benjlacroix]

# Qui sommes-nous ?

![right filtered](assets/julien-smadja.jpg)

*Julien* Smadja
Développeur fullstack
9 ans à Xebia

[.footer: @jsmadja]
[.footer-style: #FEFEFE, alignment(right)]
[.slidenumbers: false]

# Plan

- Why
- How : *Atomic Design* à la rescousse
- What : *Atomiser* une app legacy
- *Atomic Design*, c'est bien

# Why

[.header: #FEFEFE, alignment(center), line-height(1), Oswald]

## Une vision<br/>atomique du design

# Constat Design

![right 40%](assets/atomic-design-brad-frost.png)

Le design par *page* n'a plus sa place

Ces dernières sont conçues via des *éléments d'interface* qui vont devoir s'intégrer dans des environnements *variées*

Atomic Design propose une approche par composants, expliqué en détails par *Brad Frost*

[.slidenumbers: false]

# Constat Tech

Une *page* nécessite des *données*, des *intéractions*, des *animations*, du *style*

*Concevoir* et *tester* une page est *compliqué* :

* états *multiples*
* *beaucoup* d'éléments imbriqués
* données API

---

> Arrêter de penser en *page* mais en un système de *composants* qui s'adaptent
> aux différents *supports*

# Atome

![left 130%](assets/atome.png)

Element *indivisible* qui sert de *base* à d'autres composants. *Simple* et utilisé à *plusieurs* endroit
<br/>
Exemples :

- Logo
- Image
- Texte

# Atome

[.code-highlight: 2]

```html
<template>
  <img :src="src" :alt="alt" class="tt-image">
</template>
```

# Molécule

![right 60%](assets/molecule.png)

*Collection* d'atomes qui forment des composants un peu plus *complexes* 

Les molécules sont *sensibles* à la *taille* des écrans
<br/>
Exemple :

- label + champs de saisie + pictogramme loupe 🔍

# Molécule

[.code-highlight: 3-6]
[.code-highlight: 7-9]
[.code-highlight: 2-10]

```html
<template>
  <div class="tt-with-title">
    <TechTrendImage 
      class="tt-with-title__image"
      :src="image.src"
      :alt="image.alt"/>
    <p class="tt-with-title__title">
      <slot></slot>
    </p>
  </div>
</template>
```

# Organisme

![left 100%](assets/organism.png)

Combinaison *complexe* de *molécules* et ou *d'atomes* qui forment un *partie* de l'interface *finale*
<br/>
Exemple :

- Champ de recherche + navigation + logo = header 

# Organisme

[.code-highlight: 3]
[.code-highlight: 5-10]
[.code-highlight: 2-12]

```html
<template>
  <section class="tt-category">
    <HeaderList :title="title" :subtitle="subtitle"/>
    <div class="tt-category__items">
      <TechTrendWithTitle
          class="tt-category__item"
          :image="tt.image"
          :key="tt.title"
          v-for="tt in techTrends">{{tt.title}}
      </TechTrendWithTitle>
    </div>
  </section>
</template>
```

# Template

![right 60%](assets/template.png)

Une *page*... sans *données*.

Le template contient des *organismes*, des *molécules* et des *atomes*.

C'est le *dernier* niveau qui est dans *Storybook*.

Exemple :

- Header + liste des catégories + footer

# Template

[.code-highlight: 3-5]
[.code-highlight: 6-12]
[.code-highlight: 2-13]

```html
<template>
  <div class="discover-tts-template">
    <h1 class="discover-tts-template__title">
      Great list of available Tech Trends for XebiCon19!
    </h1>
    <TechTrendCategory
        class="discover-tts-template__category"
        :tech-trends="ttCategory.techTrends"
        :title="ttCategory.title"
        :subtitle="ttCategory.subtitle"
        :key="ttCategory.title"
        v-for="ttCategory in ttCategories"/>
  </div>
</template>
```

# Page

C'est le *template* rempli avec des *données* de l'*API*, la *navigation* entre les pages fonctionne.

C'est l'application *finale* visible par le *client*.

Cette partie n'est plus dans *Storybook*.

Elle est plus *difficile* à *tester* et le processus de *développement* est plus *long* que pour les éléments précédents.

# Page

[.code-highlight: 3]

```html
<template>
  <div class="app">
    <DiscoverTechTrendsTemplate :tt-categories="ttCategories"/>
  </div>
</template>
```

[.code-highlight: none]
[.code-highlight: 5-9]
[.code-highlight: 10-12]

```javascript
export default {
  components: {
    DiscoverTechTrendsTemplate
  },
  data() {
    return {
      ttCategories: [],
    };
  },
  async mounted() {
    this.ttCategories = await TtCategoryService.getTtCategories();
  }
}
```

---

![fit autoplay](https://storybook.js.org/videos/storybook-hero-video-optimized.mp4)

# Découper pour mieux tester

*Découper* en *plusieurs* éléments a des *avantages* :

- *Simplifier* les tests
- Obtenir des feedbacks *rapidement* et *régulièrement*
- *Documenter*
- *Accélérer* le développement
- *Partager* du *comportement* et du *style*

# Atomiser une app legacy

- *n* pages
- Code *dupliqué*
- Responsabilités *multiples* :
    - *Appels* API
    - *Logique* métier dans la page
    - *Routing*
- Développement *fastidieux* :
    - *Retour* à l'état précédent à chaque *rafraîchissement*

# Baby steps

1. Choisir une *page*
1. Ajouter *Storybook* au projet
1. *Décomposer* la page
1. *Extraire* les composants
    1. D'abord les *atomes*
    1. Puis les *molécules*...
1. *Remonter* tous les appels *API* dans la page
1. S'*attaquer* à une autre page et utiliser les composants déjà *découpés*

# Conclusion

- Même sur un projet *legacy*
- *Découpage*
- *Documentation*
- *Efficacité*
- *Testabilité*

# [fit] XEBICON**19**

[.text: #595959, alignment(center), Nunito]
[.text-strong: #fe414d]
[.header: #fe414d]

La vidéo de cette conférence
sera prochainement sur **xebicon.fr**

Pour en être informé, restez connecté à **@Xebiconfr**

Merci à nos sponsors

![inline](assets/confluent-logo.png) ![inline](assets/datastax-logo.png) ![inline](assets/scaleway-logo.png)

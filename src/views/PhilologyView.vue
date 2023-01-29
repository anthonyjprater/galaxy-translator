<script setup>
import { reactive } from 'vue'
import HeaderView from '@/components/HeaderView.vue'
import LanguageView from '@/components/LanguageView.vue'
import FooterView from '@/components/FooterView.vue'

const languages = reactive({
  posts: [
    {
      language: 'Yoda Speak',
      text: "What language does Yoda speak? The answer to this is surprisingly clear: It's English! This is not to say that he doesn't speak any other language, but we actually don't have any evidence he does. What's more, if Yoda's native language is not English, we can't infer any details of it from how he speaks English. To appreciate Yoda, maybe it’s best to abandon one’s grammatical senses altogether—or, you know, “unlearn what you have learned.” Like the little guy says, “Do. Or do not. There is no try.”",
      class: 'blue',
      dataTarget: '#collapseOne',
      ariaControls: 'collapseOne',
      id: 'collapseOne',
      ariaLabelledBy: 'headingOne',
      ariaExpanded: 'true',
    },
    {
      language: 'Huttese',
      text: "Huttese was the language spoken by the Hutts, a slug-like species who called Nal Hutta their homeworld, and was the second most prevalent language in the galaxy after Galactic Basic. It served as the lingua franca for both Hutt Space and most of the space surrounding the Hutts' territory. Because of the Hutts' commercial and criminal influence throughout the galaxy, Huttese was widespread. Even on worlds such as Lothal, where Hutts were not in power, their tongue was still a widespread trade language. Despite its prevalence, Huttese was generally unknown to stormtroopers, the soldiers of the Galactic Empire, as most of them could not speak anything other than Galactic Basic Standard.",
      class: 'green',
      dataTarget: '#collapseTwo',
      ariaControls: 'collapseTwo',
      id: 'collapseTwo',
      ariaLabelledBy: 'headingOneTwo',
      ariaExpanded: 'false',
    },
    {
      language: 'Sith',
      text: 'Sith was the native language of the people of Ziost and Korriban. It was adopted as the mystical language of the Sith Order after the Dark Jedi Exiles enslaved the Sith species. Despite the preeminence of the Galactic Basic Standard, the Sith language remained in use up until the post-Imperial period. ur-Kittât, commonly known as Sith or the Old Tongue, was the runic language of the Sith. It was spoken by members of the Sith Order and the Sith Eternal cult as a secret language and written in a runic form.',
      class: 'red',
      dataTarget: '#collapseThree',
      ariaControls: 'collapseThree',
      id: 'collapseThree',
      ariaLabelledBy: 'headingThree',
      ariaExpanded: 'false',
    },
    {
      language: 'Gungan',
      text: 'The native language of the Gungans, an amphibious species from Naboo. In practice, the Gungans often used a pidgin tongue that combined Galactic Basic Standard with Gunganese words and speech patterns.',
      class: 'green',
      dataTarget: '#collapseFour',
      ariaControls: 'collapseFour',
      id: 'collapseFour',
      ariaLabelledBy: 'headingFour',
      ariaExpanded: 'false',
    },
    {
      language: "Mando'a'",
      text: "The language of the people native to the planet Mandalore. Its written form was known as Mandalorian. Elements of Mando'a were taken from the language of the ancient Taungs of Coruscant, from which the culture stemmed, evolving over time to become something unique.",
      class: 'red',
      dataTarget: '#collapseFive',
      ariaControls: 'collapseFive',
      id: 'collapseFive',
      ariaLabelledBy: 'headingFive',
      ariaExpanded: 'false',
    },
  ],
})
</script>

<template>
  <div>
    <HeaderView />
    <div class="language-wrapper">
      <h1>Languages</h1>
      <LanguageView :languages="languages" />
    </div>
    <FooterView />
  </div>
</template>

<style scoped>
.language-wrapper {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
h1 {
  padding: 1rem;
  font-family: SF Distant Galaxy Outline;
  color: rgb(0, 255, 13);
  text-shadow: 4px 4px 5px #00c900, 2px 2px 2px #2ff748, 2px 2px 8px #2ff748;
}
</style>
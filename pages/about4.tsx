import { NextPage } from 'next'

export async function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString()
    },
    revalidate: 60
  }
}
export const About4Page: NextPage = () => {
  return <h1>About 4: export static props, revalidate 60 </h1>
}

export default About4Page

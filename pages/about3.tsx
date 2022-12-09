import { NextPage } from 'next'

export async function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString()
    }
  }
}
export const About3Page: NextPage = (props: any) => {
  return <h1>About 3: export static props, no revalidate {props.time}</h1>
}


export default About3Page

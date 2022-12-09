import { NextPage } from 'next'


export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toISOString()
    }
  }
}
export const About2Page: NextPage = (props: any) => {
  return <h1>About 2: SSP {props.time}</h1>
}

export default About2Page

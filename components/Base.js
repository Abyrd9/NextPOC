import Head from 'next/head';
import Nav from './Nav';

const Base = (props) => {
  return (
    <div>
      <Head>
        <title>This is The Page Title</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"></link>
      </Head>
      <Nav phoneNumber={props.phoneNumber} />
      {props.children}
    </div>
  )
}

export default Base;
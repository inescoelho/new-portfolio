import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import 'components/About.less';

const image = <img src="resources/profile.jpg" />
const bio = <>
  <p>I'm a Software Engineer specializing in web development, with 2 years of experience working with JavaScript, ReactJS, TypeScript and Redux. But I'm also a Biochemist, and working as a researcher taught me how to approach problems with an analytic and critical mindset.</p>
  <p>I support several initiatives that promote Diversity in Tech, Gender Equality and Women Empowerment. I was Chair of the <a href="https://wie.ieee.org/">IEEE Women in Tech</a> at University of Coimbra 2015/1026 and an organizer of <a href="https://railsgirlssummerofcode.org/">Rails Girls Summer of Code</a> between 2016 and 2018.</p>
  <p>I’m a book lover, occasional writer and runner. The first time I’ve played Dungeons & Dragons, my character unleashed a plague that destroyed an entire continent. But don’t worry, now I only occasionally destroy a city. Some time ago, I was featured on <a href="https://edition.cnn.com/2015/12/30/entertainment/carrie-fisher-star-wars-aging-response-twitter/index.html">CNN, alongside Carrie Fisher</a>. By the way, Han shot first. And Firefly should be watched in the correct order.</p>
</>;

export const About: React.FC = () => {
  const horizontalBio =
    <>
      {image}
      <div className={'text'}>{bio}</div>
    </>;

  const verticalBio =
    <>
      <Grid.Column width={10}>
        {bio}
      </Grid.Column>
      <Grid.Column width={6}>
        {image}
      </Grid.Column>
    </>;

  return (
    <Segment>
      <Grid centered verticalAlign='middle'>
        <Grid.Row only='mobile'>{horizontalBio}</Grid.Row>
        <Grid.Row columns={2} only='tablet'>{verticalBio}</Grid.Row>
        <Grid.Row columns={2} only='computer'>{verticalBio}</Grid.Row>
        <Grid.Row columns={2} only='widescreen'>{verticalBio}</Grid.Row>
      </Grid>
    </Segment>);
}
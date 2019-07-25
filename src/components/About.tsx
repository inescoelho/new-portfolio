import React from 'react';
import { Segment, Grid } from 'semantic-ui-react'

import 'components/About.less';

export const About: React.FC = () =>
  <Segment>
    <Grid>
      <Grid.Column width={10}>
        <p>I'm a Software Engineer specializing in web development, with 2 years of experience working with JavaScript, ReactJS, TypeScript and Redux.</p>
        <p>But I'm also a Biochemist, and working as a researcher taught me how to approach problems with an analytic and critical mindset.</p>
        <p>I support several initiatives that promote Diversity in Tech, Gender Equality and Women Empowerment.</p>
        <p>I’m a book lover, occasional writer and runner. I love furry animals and, for eight years, I've slaved to these cute guinea pigs. The first time I’ve played Dungeons & Dragons, my character unleashed a plague that destroyed an entire continent. But don’t worry, now I only occasionally destroy a city. Some time ago, I was featured on CNN, alongside Carrie Fisher (scroll down a bit and you'll find me :P). By the way, Han shot first. And Firefly should be watched in the correct order.</p>
      </Grid.Column>
      <Grid.Column width={6}>
        <img src="resources/profile.jpg" className="center" />
      </Grid.Column>
    </Grid>
  </Segment>

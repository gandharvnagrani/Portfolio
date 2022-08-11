import React from 'react';

import { MidSectionTitle, Section, SectionText, SectionTitle, AnimatedText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Gandharv Nagrani.
      </SectionTitle>
      <AnimatedText>
      <div class="wrapper">
        <ul class="dynamic-txts">
          <li><span>Software Developer.</span></li>
          <li><span>Data Analyst.</span></li>
          <li><span>Aspiring Engineer.</span></li>
        </ul>
      </div>
      </AnimatedText>
      <SectionText>
      I'm a 3rd year engineering student looking to collaborate on software projects and gain meaningful learning experiences through internships!
      </SectionText>
      <Button onClick = {() => window.open("https://google.com", "_blank") }>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;
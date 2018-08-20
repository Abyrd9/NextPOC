import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {font} from './Styles';

const FeatureSectionContainer = styled.div`
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
`

const FeatureTitle = styled.h2`
  text-align: center;
  ${font(48, 200)}
  margin: 0;
  margin-bottom: 10px;
  color: #6c63ff;
`

const FeatureSubtitle = styled.p`
  text-align : center;
  ${font(16, 200)}
  margin: 10px;
`

const Featurelegal = styled.p`
  text-align: center;
  ${font(10, 200)}
`

const FeatureContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 60px;
`

const FeatureBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
  max-width: 600px;
`

const FeatureImage = styled.img`
  height: 125px;
`

class FeatureSection extends Component {
  constructor() {
    super();
    this.state = {
      features: [
        {
          img: '../static/icons/_ionicons_svg_md-globe.svg',
          title: 'Access around the globe wherever you have access.',
          legal: 'not applicable for any location outside of the current county you are in'
        },
        {
          img: '../static/icons/_ionicons_svg_md-chatboxes.svg',
          title: 'Message anyone from anywhere because you have so many friends and stuff.',
          legal: ''
        },
        {
          img: '../static/icons/_ionicons_svg_md-construct.svg',
          title: "Constant and relentless support even when you don't want it.",
          legal: 'support restrictions apply, please do not ask for it directly.'
        },
      ]
    }
  }

  render() {
    return (
      <FeatureSectionContainer>
        <FeatureTitle>These are some cool features</FeatureTitle>
        <FeatureSubtitle>If you look at these features, I'll bet you'd really like to buy some things.</FeatureSubtitle>
        <FeatureContent>
          {this.state.features.map(feature => (
            <FeatureBlock>
              <FeatureImage src={feature.img} />
              <FeatureSubtitle>{feature.title}</FeatureSubtitle>
              <Featurelegal>{feature.legal}</Featurelegal>
            </FeatureBlock>
          ))}
        </FeatureContent>
      </FeatureSectionContainer>
    );
  }
}

FeatureSection.propTypes = {

};

export default FeatureSection;
import React from 'react'
import styled from 'styled-components'

interface Props {}

const WantWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 200px;
`

const TitleRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`
const Title = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  margin: 0 20px;
  color: #fff;
`
const TitleBgImage = styled.img`
  width: 32px;
  height: 26px;
`

const Line = styled.div`
  width: 580px;
  height: 1px;
  background: #5b5b5b;
`

const T = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 62px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 160px;
  padding-bottom: 160px;
`

const Desc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */
  text-align: center;
  color: #ffffff;
  margin-top: 40px;
`

const TitleBg = require('../../../assets/images/ambassador/title-bg.png').default
export function TitleText({ title }: { title: string }) {
  return (
    <TitleRow>
      <TitleBgImage src={TitleBg} />
      <Title>{title}</Title>
      <TitleBgImage src={TitleBg} />
    </TitleRow>
  )
}

export default function Wants() {
  return (
    <WantWrap>
      <T>Roles to Get Involved</T>
      <ListWrap>
        <TitleText title="Community Manager" />
        <Desc>
          Moderate social channels and forums.
          <br /> Post announcements, share updates, and answer questions
          <br /> Translate and forward the important announcement to the local community
        </Desc>
        <Line style={{ margin: '64px 0' }} />
        <TitleText title="Content Creator" />
        <Desc>
          Videos
          <br /> Articles
          <br /> Podcasts
          <br /> Designs
        </Desc>
        <Line style={{ margin: '64px 0' }} />
        <TitleText title="Technical Ambassador" />
        <Desc>
          Help build the developer community.
          <br /> Provide community tech support .
          <br />
          Create and participate in bug bounties.
          <br />
          Update dev docs; create tutorials .
          <br />
          Host dev workshops. Speak at community events.
          <br /> Participate during hackathons.
          <br />
          Identify developer needs and use cases.
        </Desc>
        <Line style={{ margin: '64px 0' }} />
        <TitleText title="Influence Spreader" />
        <Desc>
          Influencers and KOLs
          <br /> Organize AMAs and meetups
          <br /> Help with campaigns and marketing initiatives
        </Desc>
      </ListWrap>
    </WantWrap>
  )
}

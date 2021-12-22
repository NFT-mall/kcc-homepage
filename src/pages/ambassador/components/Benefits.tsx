import React from 'react'
import styled from 'styled-components'
import { TitleText } from '../../../components/Common'

interface Props {}

const BenifitList = [
  {
    icon: require('../../../assets/images/ambassador/1.png').default,
    desc: 'Access to private groups, and connect with ambassadors from other countries',
  },
  {
    icon: require('../../../assets/images/ambassador/2.png').default,
    desc: 'Exclusive resources to help educate and onboard more community members',
  },
  {
    icon: require('../../../assets/images/ambassador/3.png').default,
    desc: 'Early access to new features and updates, and the opportunity to provide feedback ',
  },
  {
    icon: require('../../../assets/images/ambassador/4.png').default,
    desc: 'Direct access to the core team of the KCC for questions, suggestions, etc.',
  },
  {
    icon: require('../../../assets/images/ambassador/5.png').default,
    desc: 'Getting funds as return based on contributions',
  },
  {
    icon: require('../../../assets/images/ambassador/6.png').default,
    desc: 'Tagged as one of the KCC GoDAO members and able to decide how KCC should progress ',
  },
  {
    icon: require('../../../assets/images/ambassador/7.png').default,
    desc: 'Priority support',
  },
]

const BenefitWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`

const Img = styled.img`
  width: 110px;
  height: 144px;
`
const Line = styled.div`
  width: 360px;
  background: #fff;
  height: 1px;
  margin: 32px 0;
`
const Text = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  color: #ffffff;
  max-width: 360px;
`

const ListWrap = styled.div`
  max-width: 880px;
  margin-top: 120px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`

const ListItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 80px;
  &:nth-child(even) {
    margin-left: 160px;
  }
`

export default function Benefits() {
  return (
    <BenefitWrap>
      <TitleText style={{ marginTop: '89px', color: '#fff', fontSize: '52px' }}>
        Benefits of Being a GoDAO Ambassador
      </TitleText>
      <ListWrap>
        {BenifitList.map((item, index) => {
          return (
            <ListItem key={index}>
              <Img src={item.icon} />
              <Line />
              <Text>{item.desc}</Text>
            </ListItem>
          )
        })}
      </ListWrap>
    </BenefitWrap>
  )
}

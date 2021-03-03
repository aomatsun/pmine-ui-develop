import React, { ReactNode, useState } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GrootUiLandingComponentsFaqProps {}
interface AnswerProps {
  visible: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;
  width: 100%;
  margin: auto;
  text-align: left;
`;

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background: rgb(3, 253, 120);
  background: linear-gradient(90deg, #17a2b8 0%, rgba(152, 66, 238, 1) 100%);
`;

const Question = styled.div`
  margin: 5px 0 5px 0;
  display: flex;
  flex-direction: column;
  height: 100%;

  -webkit-transition: all 1s linear;
`;

const Title = styled.h3`
  &:hover {
    cursor: pointer;

    /* Chrome, Safari, Opera */
    -webkit-animation: rainbow 5s infinite;

    /* Internet Explorer */
    -ms-animation: rainbow 5s infinite;

    /* Standar Syntax */
    animation: rainbow 5s infinite;

    /* Chrome, Safari, Opera */
    @-webkit-keyframes rainbow {
      0% {
        color: #17a2b8;
      }
      12.5% {
        color: #03fd78;
      }
      25% {
        color: #00a66c;
      }
      37.5% {
        color: #32ffc6;
      }
      50% {
        color: #2e5796;
      }
      62.5% {
        color: #5178e7;
      }
      75% {
        color: #511798;
      }
      87.5% {
        color: #9842ee;
      }
      100% {
        color: #00a64c;
      }
    }

    /* Internet Explorer */
    @-ms-keyframes rainbow {
      0% {
        color: #17a2b8;
      }
      12.5% {
        color: #03fd78;
      }
      25% {
        color: #00a66c;
      }
      37.5% {
        color: #32ffc6;
      }
      50% {
        color: #2e5796;
      }
      62.5% {
        color: #5178e7;
      }
      75% {
        color: #511798;
      }
      87.5% {
        color: #9842ee;
      }
      100% {
        color: #00a64c;
      }
    }

    /* Standar Syntax */
    @keyframes rainbow {
      0% {
        color: #17a2b8;
      }
      12.5% {
        color: #03fd78;
      }
      25% {
        color: #00a66c;
      }
      37.5% {
        color: #32ffc6;
      }
      50% {
        color: #2e5796;
      }
      62.5% {
        color: #5178e7;
      }
      75% {
        color: #511798;
      }
      87.5% {
        color: #9842ee;
      }
      100% {
        color: #00a64c;
      }
    }
  }
`;

const Answer = styled.p`
  visibility: ${(props: AnswerProps) => (props.visible ? 'visible' : 'hidden')};
  text-align: justify;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #03fd78;
  margin: 0 5px 0 5px;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export function Faq(props: GrootUiLandingComponentsFaqProps) {
  const [currentFaq, setCurrentFaq] = useState(0);

  const changeFaq = (faq) => {
    if (currentFaq === faq) {
      setCurrentFaq(0);
    } else {
      setCurrentFaq(faq);
    }
  };

  return (
    <Container>
      <Divider />
      <Question>
        <Title onClick={() => changeFaq(1)}>What is gROOT?</Title>
        {currentFaq === 1 && (
          <Answer visible={currentFaq === 1}>
            gROOT is a token that is directly linked to the performance of DeFi
            in BSC by building up a treasury that holds yield farming positions
            in different protocols such as Pancake Swap, Auto Farm and Venus.
          </Answer>
        )}
      </Question>
      <Divider />
      <Question>
        <Title onClick={() => changeFaq(2)}>
          Has gROOT been fairly launched?
        </Title>
        {currentFaq === 2 && (
          <Answer visible={currentFaq === 2}>
            Yes, there wasn't any presale or ICO for gROOT and the team doesn't
            have any allocation from the supply.
          </Answer>
        )}
      </Question>
      <Divider />
      <Question>
        <Title onClick={() => changeFaq(3)}>
          What is the gROOT contract address?
        </Title>
        {currentFaq === 3 && (
          <Answer visible={currentFaq === 3}>
            The contract address of gROOT is 0x8b571fe684133aca1e926beb86cb545e549c832d
          </Answer>
        )}
      </Question>
      <Divider />
      <Question>
        <Title onClick={() => changeFaq(4)}>How do I get gROOT?</Title>
        {currentFaq === 4 && (
          <Answer visible={currentFaq === 4}>
            You can buy gROOT on Pancake Swap.
          </Answer>
        )}
      </Question>
      <Divider />
      <Question>
        <Title onClick={() => changeFaq(5)}>
          What is liquidity mining on gROOT?
        </Title>
        {currentFaq === 5 && (
          <Answer visible={currentFaq === 5}>
            You can provide liquidity to the BNB/gROOT to receive more gROOT
            overtime.
            <br />
            <br />
            Choose the manual pool if you want to manually claim the gROOT
            farmed or use the compounding pool to have the gROOT automatically
            reinvested into more liquidity provider tokens. Liquidity mining
            with gROOT is the best way to get a higher APY on top of the yield
            farming returns the gROOT Treasury brings.
          </Answer>
        )}
      </Question>
      <Divider />
      <Question>
        <Title onClick={() => changeFaq(6)}>What is the gROOT treasury?</Title>
        {currentFaq === 6 && (
          <Answer visible={currentFaq === 6}>
            The gROOT treasury is the core part of gROOT, it holds yield farming
            positions in different protocols such as Pancake Swap, Auto Farm and
            Venus.
            <br />
            <br />
            It focuses on diversyfing its holdings across multiple pairs and
            compounding several times per day. When the price of gROOT is high
            relative to the treasury networth the treasury will sell some gROOT
            to expand its size. When the price of gROOT is low relative to the
            treasury networth the treasury will buyback some gROOT to reduce the
            supply.
          </Answer>
        )}
      </Question>
      <Divider />
      <Question>
        <Title onClick={() => changeFaq(7)}>
          What are the gROOT Treasury addresses?
        </Title>
        {currentFaq === 7 && (
          <Answer visible={currentFaq === 7}>
            For transparency purposes all the treasury addresses are public at
            all times:
            <br />
            <br />
            0x6248f5783A1F908F7fbB651bb3Ca27BF7c9f5022
            <br />
            0xBf70B751BB1FC725bFbC4e68C4Ec4825708766c5
            <br />
            0x2165fa4a32B9c228cD55713f77d2e977297D03e8
            <br />
          </Answer>
        )}
      </Question>
      <Divider />
      <Question>
        <Title onClick={() => changeFaq(8)}>What is the goal of gROOT?</Title>
        {currentFaq === 8 && (
          <Answer visible={currentFaq === 8}>
            gROOT's mission is to be the benchmark of a diversified
            auto-compounding yield farming portfolio on BSC.
          </Answer>
        )}
      </Question>
      <Divider />
      <Question>
        <Title onClick={() => changeFaq(9)}>Who created gROOT?</Title>
        {currentFaq === 9 && (
          <Answer visible={currentFaq === 9}>
            gROOT is a product of the{' '}
            <StyledLink href="https://growthdefi.com" target="_blank">
              Growth DeFi
            </StyledLink>{' '}
            ecosystem, check out GRO’s website to learn more about it.
          </Answer>
        )}
      </Question>
      <Divider />
      <Question>
        <Title onClick={() => changeFaq(10)}>
          What will the initial liquidity mining pools be?
        </Title>
        {currentFaq === 10 && (
          <Answer visible={currentFaq === 10}>
            At launch liquidity mining will be available for the BNB/gROOT pair,
            more pairs will be added overtime.
          </Answer>
        )}
      </Question>
      <Divider />
    </Container>
  );
}

export default Faq;

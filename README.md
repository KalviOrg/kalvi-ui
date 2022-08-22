<img src="./public/kalviv3.png" class="center"/>

# kalvi-ui
User Interface for Kalvi 
# Welcome to Kalvi
**Kalvi** - Improves learner engagement and **increases completion** rate by incentivizing learning by streaming rewards.

## Preamble 

**COVID** has changed learning forever. There is a paradigm shift in the way people learnt pre and post COVID, there is high growth and adoption in Education Technology. We are experiencing an unplanned and rapid migration to online learning. A huge number of people started joining online courses to **reskill** and **upskill**.

It is clear that this pandemic has utterly disrupted the way we learn. It had both positive and negative impacts. There was a terrible disconnect between the enrollment rate and completion rate which questioned the impact of online learning.

## Problem Statement

Learner's drop out rate is up by **67 %** with most of them leaving due to a lack of Motivation and engaging content. We need to fix this problem by focusing on ways to **Motivate** the users ,Personalise and **Reward** their learning journey.

## Mission Statement 

To build an Edutech dApp (Kalvi) to reskill and upskill the learning community across the globe. Kalvi makes them more productive and efficient by providing personalized content, learning pathways with AI-driven recommendations (future roadmap) and by using LTEM (Learning-Transfer Evaluation / **Kirk Patricks Model**) to increase **ROI** on learners journey . Kalvi **Incentivizes** learners by streaming **rewards** when a certain **milestone** is achieved.

## Design Document
* [Design Thinking](https://github.com/KalviOrg/kalvi-core/blob/main/docs/design.md)

## Our solution
We created a dApp that can connect Employer and Employee together to achieve learning goals, that can create business impact for the organization. Employer can signup, onboard employees, create courses, assign reward for courses. Employee can learn the courses, take assessment and earn rewards in USDCx super token. Employee can unwrap the token to stable coin and withdraw to their exchange account.

## User Guide
* [Kalvi User Guide](https://github.com/KalviOrg/kalvi-core/blob/main/docs/userguide.md)

## How It's Made

###### Architecture

- Kalvi-core - Smart contracts incorporating business logics
- Kalvi - Next.js/TypeScript based frontend dApp
- SuperFluid - For real time streaming rewards based on Programmable Cashflows
- Sequence - Hassfle free on-board of Web2/Web3 users
- Polygon - Easy, Cheap and quickest L2 solution for deploying contracts
- Plyr.io - A simple, accessible and customisable media player for video platforms
- YouTube - Online course provider

###### Technologies

- UI - Next.js, React, HTML/Tailwind CSS
- Smart Contracts - Solidity, USDCx/USD contract/ABI from Mumbai testnet
- Programmable Cashflow - SuperFluid
- Backend - TypeScript
- IPFS - Storing and retrieving assessment questions
- Testnet - Mumbai Polygon
- Tools - Truffle, Remix, Metamask, Google Profile OAuth
- CI/CD - ArgoApp/Spheron Protocol
- Art Design - Adobe PhotoShop, Adobe Illustrator

## Related source code repo

* dApp - https://github.com/KalviOrg/kalvi-ui
* Smart Contracts - https://github.com/KalviOrg/kalvi-core

## Kalvi Demo URL
* Spheron - http://kalvi-ui-v3g4fi.spheron.app/

## Sponsor Integrations
### Polygon Mumbai testnet deployment contract address
- https://mumbai.polygonscan.com/address/0x41810ea34aA8208cF0D8B6CD779582e6e70fBb89

### Sequence Wallet integration
- https://github.com/KalviOrg/kalvi-ui/commit/67e99fa638006b84d50ab320079179a1a481b39a

### Spheron CI/CD Implementation
- https://aqua.spheron.network/#/org/62db126731a4d30012a2d2b4/project/6300de47d2ef260014438d46/deployments
- https://kalvi-ui-v3g4fi.spheron.app/

### IPFS Web3.storage Implementation
- https://github.com/KalviOrg/kalvi-ui/blob/main/src/services/web3StorageUtils.js

##  Phase 2 Road Map

* Building Futuristic Course Path using Instructional design
* Building assessments
* Designing the milestones and metrics for incentivizing the learners
* Analyse business impact
* Launch an Alpha 

##  Phase 3  Road Map

* Building assessments based on (Learning-Transfer Evaluation / Kirk Patricks Model) for each course
* Unable managers to customise KPI's to insure ROI 
* Enable superfluid in the employer end to stream funds from employer wallet to Kalvi wallet
* Launch a Beta

##  Phase 4 Road Map

* Building Personalised learning content based on learners generation (Gen-Z, Millennials, Gen X )using learning science (LS)
* Building Personalised learning pathway based on users current skill level (Adaptive learning)
* Launch a Beta

## Developers

* Kaushik (kaushik.mrl@gmail.com)
* Ram Vittal (ramvittal@gmail.com)
* Sajith Mohideen (sajith.wanderer@gmail.com)
* Sayan Mohideen (sayan.wander@gmail.com)

## How to setup and run kalvi
```
 git clone https://github.com/KalviOrg/kalvi-ui.git
 yarn install
 yarn build
 yarn start

```

## Reference

https://www.mckinsey.com/industries/education/our-insights/covid-19-and-education-an-emerging-k-shaped-recovery

https://indianexpress.com/article/explained/learning-loss-in-the-pandemic-explained-the-case-of-elementary-schools-in-karnataka-7521512/

https://www2.deloitte.com/us/en/insights/deloitte-review/issue-16/employee-engagement-strategies.html

https://medium.com/the-learning-strategist-iq/how-to-incentivize-learning-in-the-workplace-acd8724cabe0

https://www.shrm.org/hr-today/news/hr-magazine/pages/0515-learning-culture.aspx

https://showcase.ethglobal.com/roadtoweb3/allocate

https://www.linkedin.com/business/learning/blog/learning-and-development/questions-to-kickstart-your-data-driven-learning-strategy

https://indianexpress.com/article/education/why-drop-out-rates-are-high-for-online-courses-and-what-is-the-solution-6376045/

https://www.businessinsider.in/business/startups/news/over-1225-universities-sign-up-with-coursera-in-india-enrollments-in-public-health-content-shoot-up-by-a-whopping-2280/articleshow/75058940.cms

https://www.novoed.com/resources/blog/elearning-social-completion-rates/

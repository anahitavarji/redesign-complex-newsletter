import React, {Component} from "react";
import {render} from "react-dom";
import {Container, Row, Col} from "reactstrap";

import "./App.css";


import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <Col>

                            <div className="newsHeader">
                                <Box>
                                    🗞️ Breaking News...🗞️
                                </Box>
                            </div>


                        </Col>
                    </Row>


                    <Row>
                        <Col xs="4">
                            <img className="newsImg"
                                src={
                                    process.env.PUBLIC_URL + '/images/cali.jpg'
                                }/>


                            <div className="newsText">
                                <Box>


                                    <div className="newsH1">California Man Dies After Police Allegedly Kneeled on His Neck for Nearly 5 Minutes</div>


                                    <div className="newsP">
                                        <p>A California family has filed a wrongful death claim against the Antioch Police Department, alleging their 30-year-old son died after officers kneeled on his neck for nearly five minutes.
                                            According to CNN, the incident took place on Dec. 23, 2020, when Navy veteran Angelo Quinto began experiencing a mental health crisis at home. An attorney for the family says Quinto’s sister Isabella Collins called police because she was concerned that her brother, who had a history of anxiety, depression, and paranoia, would harm their mother. Law enforcement arrived at the residence shortly after and reportedly found Quinto in his mom’s arms. The family claims the responding officers didn’t attempt to understand the situation, and immediately grabbed Quinto and began restraining him on the ground.
                                            During the encounter, Quinto lost consciousness and was then transferred to the hospital, where he died three days later. 
                                            “Police came and snatched him from his mom,” the family’s lawyer, John L. Burris, told reporters last week. “He said ‘please don’t kill me,’ and officers said ‘We’re not going to do that,’ and yet they did.”
                                            Quinto’s mother, Maria Quinto-Collins, captured some of the incident on video, which was later shared online. The disturbing footage begins with Quinto on the ground unresponsive, as officers ask the family if he was on any kind of medication or had eaten that day. They then handcuffed the unresponsive Quinto, placed him on a stretcher, and began performing chest compressions. As pointed out by CNN, it’s unclear if the responding officers were wearing body cameras.

                                            <div className="readMore">
                                                <a href="https://www.nytimes.com" target="_blank">Read More..</a>
                                            </div>
                                        </p>
                                    </div>


                                </Box>
                            </div>

                        </Col>

                        <Col xs="4">

                            <img className="newsImg"
                                src={
                                    process.env.PUBLIC_URL + '/images/Twitter.jpg'
                                }/>

                            <div className="newsText">
                                <Box>


                                    <div className="newsH1">Twitter Announces New Paid Subscription Service ‘Super Follow’
                                    </div>

                                    <div className="newsP">
                                        <p>

                                            Twitter, whose larger plans for the future include doubling revenue by the end of 2023, has announced a new feature called Super Follow that will give users the option of providing exclusive content to their followers for a price.
                                            The Patreon-esque feature, per a rundown of Thursday’s Analyst event from 9to5Mac, will see Super Follow subscriptions that run $4.99 per month with a “cancel anytime” option. A supporter badge, subscriber-exclusive newsletters, and exclusive content of varying forms are among the highlights of the new feature.
                                            It’s easy to imagine the Super Follow rollout being a highly impactful update to the Twitter experience, particularly in terms of sex workers, independent journalists, and other public figures who could potentially (and quickly) leverage it into a paywall of sorts for tweeted content. Other updates to the Jack Dorsey-fronted social media service announced on Thursday include the Facebook Groups-esque Communities and a new Safety Mode which will automatically detect accounts that act abusively or “spammy.”
                                            Per CNBC, a recent SEC filing saw Twitter stating its ambition to have 315 million monetizable daily active users (and that aforementioned doubled revenue) by 2023. Following circulation of the filing, Twitter’s stock jumped more than 5 percent. In the fourth quarter of 2020, Twitter reported 192 million monetizable daily active users. Recent months have been pivotal for the platform, which in January announced the permanent suspension of single-term POTUS Donald Trump’s verified account due to what it determined was a risk of “further incitement of violence” following the deadly Capitol riot.

                                            <div className="readMore">
                                                <a href="https://www.nytimes.com" target="_blank">Read More..</a>
                                            </div>

                                        </p>
                                    </div>
                                </Box>
                            </div>

                        </Col>

                        <Col xs="4">

                            <img className="newsImg"
                                src={
                                    process.env.PUBLIC_URL + '/images/Kyrie.jpg'
                                }/>

                            <div className="newsText">
                                <Box>


                                    <div className="newsH1">
                                        Kyrie Irving Calls for Kobe Bryant to Be the New NBA Logo
                                    </div>

                                    <div className="newsP">
                                        <p>

                                            Kyrie Irving reignited the discussion around changing the NBA logo to Kobe Bryant with an Instagram post on Wednesday. The Brooklyn Nets point guard shared a mock-up/tribute of the late Bryant in the place of the silhouette of Jerry West, who occupies the current logo. He argued that a league made up of predominantly black players should feature a black athlete as its logo. “Gotta Happen, idc what anyone says,” he wrote. “BLACK KINGS BUILT THE LEAGUE.”
                                            The mock-up, like the push to replace West with Bryant, has been at the center of NBA discourse for over a year. It was created by designer Tyson Beck around the time of Bryant’s passing, and a petition to replace the long-standing logo was created shortly after Bryant’s death. The momentum is definitely there, as it’s received over 3.2 million signatures to date. The current NBA logo was created in 1969 by Alan Siegel using a photograph of West.
                                            For Irving, the change would better represent the league half a century later. The Nets star was close with Bryant, who mentored Irving through his early days after the pair met playing for Team USA. Their bond was so strong that Irving called Bryant from the locker room after he won a championship in 2016.

                                            <div className="readMore">
                                                <a href="https://www.nytimes.com" target="_blank">Read More..</a>
                                            </div>

                                        </p>
                                    </div>
                                </Box>
                            </div>

                        </Col>
                    </Row>

                    <Row>
                        <Col xs="4">

                            <img className="newsImg"
                                src={
                                    process.env.PUBLIC_URL + '/images/simps.jpg'
                                }/>
                            <div className="newsText">
                                <Box>


                                    <div className="newsH1">‘The Simpsons’ Will Now Have a Black Actor Voice the Character of Dr. Hibbert
                                    </div>

                                    <div className="newsP">
                                        <p>

                                            Deadline can confirm that Kevin Michael Richardson will be replacing Harry Shearer as the voice of Dr. Hibbert on The Simpsons.
                                            Shearer’s last turn as the character occurred this past Sunday, making way for Richardson to begin on Feb. 28. The move follows through with an announcement from the show’s producers last June stating white actors will no longer voice non-white characters. 
                                            The Simpsons’ change of heart came shortly after Mike Henry stepped down as the voice of Cleveland Brown on Family Guy after two decades. “It’s been an honor to play Cleveland on Family Guy for 20 years,” Henry explained via Twitter at the time. “I love this character, but persons of color should play characters of color.” 
                                            Henry’s departure was part of a chain reaction where white actors were forced to contend with the representation issues that came with lending their voice to a Black character, thereby taking away an opportunity from a Black actor. Jenny Slate announced she would no longer be playing the biracial character of Missy on the Netflix series Big Mouth. Kristen Bell did the same with her character Molly on the Apple TV+ series Central Park shortly thereafter.  
                                            Shearer will still be voicing the roles of Mr. Burns, Mr. Smithers, Principal Skinner, Ned Flanders, and Reverend Lovejoy, among others. Richardson’s previous work includes speaking roles on Family Guy and American Dad, as well as his portrayal of Rosie on F Is For Family, which earned him an Emmy nomination in 2019.

                                            <div className="readMore">
                                                <a href="https://www.nytimes.com" target="_blank">Read More..</a>
                                            </div>


                                        </p>
                                    </div>

                                </Box>
                            </div>
                        </Col>

                        <Col xs="4">

                            <img className="newsImg"
                                src={
                                    process.env.PUBLIC_URL + '/images/ohio.jpg'
                                }/>

                            <div className="newsText">
                                <Box>


                                    <div className="newsH1">Ohio Teen Drowns After Saving Younger Brother From Frozen Lake
                                    </div>


                                    <div className="newsP">
                                        <p>

                                            A 16-year-old girl has died after she saved her 13-year-old brother when they fell through the ice on a frozen lake in Ohio on Tuesday evening.
                                            ABC News reports that the teen girl and her brother fell through the ice by the boat docks at Rocky Fork State Park in Hillsboro. The water was just 36 degrees by the time authorities arrived at the scene, and the girl was found unresponsive under the ice. The boy, meanwhile, was taken to a nearby hospital in stable condition. “She got him out, before she succumbed,” Lt. Branden Jackman said in an interview with Cincinnati’s WCPO. “Don’t go out on the ice. It caused a very bad tragedy last night.”
                                            An officer part of the recovery efforts also died after suffering a “medical emergency” at the scene. Jason Lagore was transported to a nearby hospital, but was unable to be resuscitated. “Officer Lagore was a dedicated officer, having served 15 years with the Ohio Department of Natural Resources,” reads the Department of Natural Resources’ statement on his death. “He leaves behind a wife, two young sons and his K-9 partner, Sarge.”
                                            Ohio governor Mike DeWine offered his condolences to Lagore’s family on Twitter. “In honor of his life and service, I’ve ordered flags lowered on public buildings and grounds in Highland County, and at the Statehouse, Riffe Center, and Rhodes Tower in Columbus,” he tweeted on Wednesday  “You look at water and you think, ‘Oh, it’s just water,’” Jackman added. “Thirty-six-degree water is no different than a three-story house fire. They’ll both kill you just as quick.”


                                            <div className="readMore">
                                                <a href="https://www.nytimes.com" target="_blank">Read More..</a>
                                            </div>

                                        </p>
                                    </div>

                                </Box>
                            </div>
                        </Col>

                        <Col xs="4">

                            <img className="newsImg"
                                src={
                                    process.env.PUBLIC_URL + '/images/texas.jpg'
                                }/>

                            <div className="newsText">
                                <Box>


                                    <div className="newsH1">

                                        Police Drop Charge Against Black Texas Teen Who Was Walking Home From Work on Icy Street

                                    </div>


                                    <div className="newsP">
                                        <p>

                                            Police have dropped a charge against a Black teen from Plano, Texas, after said teen was arrested last week for walking in the middle of the street when the state was freezing over. 
                                            Local police chief Ed Drain told KDFW-TV that a charge against 18-year-old Rodney Reese is being dropped. Reese had spent a night in jail after Plano police approached him as he walked home from work. He was charged with being a pedestrian in the roadway.
                                            “There’s a lot information that we know about this case that we didn’t know at the time,” Drain said to that outlet. “Those officers didn’t know his age. They didn’t know he was 18. They didn’t know he worked at Walmart. They didn’t know where he lived.”
                                            Reese told the same TV station that he thinks his race is what led to his arrest. 
                                            “Just ‘cause I’m Black, that’s it,” he said. “I don’t think the call would’ve happened [if I wasn’t Black]. Honestly, I really don’t.”
                                            Plano police were called as part of a welfare check just before 11 p.m. on Tuesday, February 16. The caller said a Black man was wearing short-sleeves, shorts, and was stumbling. Temperatures were in the teens, and the road was covered with snow and ice.
                                            Reese was subsequently located by officers following the call. At the time he was reportedly wearing short-sleeves and long pants, and was just a few blocks from his home. He later told KDFW-TV he was walking in the middle of the road because the nearby sidewalks were covered in snow and ice.

                                            <div className="readMore">
                                                <a href="https://www.nytimes.com" target="_blank">Read More..</a>
                                            </div>

                                        </p>
                                    </div>

                                </Box>
                            </div>
                        </Col>
                    </Row>


                </Container>
            </div>
        );
    }
}

export default App;

const Box = props => <div className="box">
    {
    props.children
} </div>;

render (
    <App/>,
    document.getElementById("root")
);

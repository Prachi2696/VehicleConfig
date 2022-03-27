import React from "react";
import Card from 'react-bootstrap/Card'


export const aboutus = () => {
    return (
        <>

            {/* <div class="col-md-7">
                <br /><br /><br /><br /><br>
                    <h2 class="featurette-heading">Company </h2> <span class="text-muted">It’ll blow your mind.</span>
                <p class="lead">The journey began in 2021 when vehicle config was founded in Nagpur, India. Since then our mission has been to provide quality
                    exotic cars with highly personalized care at a competitive price. Creating a new benchmark for excellence in every
                    aspect of our business.
                    Since our inception our primary aim has been our passion for delivering excellence which became our mission. YOU (our
                    patrons) are the driving force behind our company and making sure you get the best is what we thrive on.
                </p>
            </div>
            <div class="col-md-5">
                <br><br>

                    <img src="10.jpg" height="350" width="550" />

                
            </div>

            <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">Vision  <br /><span class="text-muted">See for yourself.</span></h2>
                    <p class="lead">At Vehicle Config our vision is to buy and sell modify cars that define quality and luxury for the 21st century. Applying
                        our expertise in this industry, we aspire to transform the exotic car market, where cars are the ultimate expression of
                        modern dynamism and luxury.


                        We accept that the clients’ need and intrigue consistently starts things out and ought to be given the most effective
                        attention. Our exotic vehicle assortment entices you to pick something novel and particular to suit your style . Find a
                        remarkable universe of extravagance and energy at Vehicle Config with one of the best car extravaganza marked on offer.
                        Allow your investigation to start! </p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img src="11.jpg " height="500" width="500" />
                </div>
            </div>
        </> */}



            {/* className="bg-dark text-white" */ }
    <Card className="aboutus">
                <Card.Img src='A1.jpeg' alt="Card image" className="aboutusimg" />
                <Card.ImgOverlay>
                    <Card.Title><h1  >Company</h1></Card.Title>
                    <Card.Text ><p><strong>
                        The journey began in 2021 when vehicle config was founded in Nagpur, India. Since then our mission has been to provide quality
                        exotic cars with highly personalized care at a competitive price. Creating a new benchmark for excellence in every
                        aspect of our business.
                        Since our inception our primary aim has been our passion for delivering excellence which became our mission. YOU (our
                        patrons) are the driving force behind our company and making sure you get the best is what we thrive on.
                    </strong></p> </Card.Text>
                <br/>
                <Card.Text>
                    <p>  <strong>
                        At Vehicle Config our vision is to buy and sell modify cars that define quality and luxury for the 21st century. Applying
                        our expertise in this industry, we aspire to transform the exotic car market, where cars are the ultimate expression of
                        modern dynamism and luxury.


                        We accept that the clients’ need and intrigue consistently starts things out and ought to be given the most effective
                        attention. Our exotic vehicle assortment entices you to pick something novel and particular to suit your style . Find a
                        remarkable universe of extravagance and energy at Vehicle Config with one of the best car extravaganza marked on offer.
                        Allow your investigation to start!
                    </strong></p>
                </Card.Text>

            </Card.ImgOverlay>
        </Card>
        </>
       
    );
}
export default aboutus;
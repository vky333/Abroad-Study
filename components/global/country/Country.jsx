import Link from "next/link";
import React from "react";
import styles from "../country/Country.module.css";
import { section, Carousel } from "react-bootstrap";
import Custom_Country from "../country/Custom_Country";

export const Country = () => {
  return (
    <>
      <div className={`${styles.hdingBox} Global_heding`}>
        <h1>Destinations you can reach with us!</h1>
      </div>
      <section
        className={`${styles.CountryContainer} contryJourney sectionGlobal`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Carousel>
                <Carousel.Item>
                  <div className={`${styles.ContAccordian}`}>
                    <div className={`${styles.box_01} ${styles.glBox}`}>
                      <Custom_Country
                        CountryName="USA "
                        InnerCountryName="Universities in USA "
                        InnerCountryContent="<ul>
                        <li>Johnson & Wales University </li>
                        <li>Clark University </li>
                        <li>Yeshiva University</li>
                        <li>Northern Arizona University</li>
                        <li>University of Bridgeport</li>
                        <li>Edgewood College</li>
                        <li>South Dakota State University</li>
                        <li>Golden Gate University</li>
                        <li>Troy University</li>
                      </ul> "
                      />
                    </div>
                    <div className={`${styles.box_02} ${styles.glBox}`}>
                      <Custom_Country
                        CountryName="UK"
                        InnerCountryName="Universities in UK "
                        InnerCountryContent="<ul>
                        <li>Keele University</li>
                        <li>University of Plymouth</li>
                        <li>Shefflield Hallam University </li>
                        <li>University of Dundee</li>
                        <li>De Montfort University</li>
                      </ul> "
                      />
                    </div>
                    <div
                      className={`${styles.box_03} ${styles.glBox} ${styles.mbileHide}`}
                    >
                      <Custom_Country
                        CountryName="Germany"
                        InnerCountryName="Universities in Germany "
                        InnerCountryContent="<ul>
                        <li>
                          International University of Applied Science
                        </li>
                        <li>GISMA Business School</li>
                      </ul>
                      "
                      />
                    </div>
                    <div
                      className={`${styles.box_04} ${styles.glBox} ${styles.mbileHide}`}
                    >
                      <Custom_Country
                        CountryName="Canada"
                        InnerCountryName="Universities in Canada "
                        InnerCountryContent="<ul>
                        <li>University of Canada West</li>
                        <li>Yorkville University </li>
                        <li>Trinity Western University</li>
                      </ul> "
                      />
                    </div>
                    <div
                      className={`${styles.box_05} ${styles.glBox} ${styles.mbileHide}`}
                    >
                      <Custom_Country
                        CountryName="Australia"
                        InnerCountryName="Universities in Australia "
                        InnerCountryContent="<ul>
                              <li>Deakin University</li>
                              <li>Jame Cook University</li>
                              <li>Torrens University</li>
                              <li>University of Canberra</li>
                              <li>Russo Business School</li>
                              <li>Victoria University</li>
                              <li>Flinders University</li>
                              <li>Western Sydney University</li>
                              <li>Bond University</li>
                              <li>University of New South Wales</li>
                              <li>University of Queensland</li>
                            </ul> "
                      />
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className={`${styles.ContAccordian}`}>
                    <div
                      className={`${styles.box_06} ${styles.glBox} ${styles.mbileHide}`}
                    >
                      <Custom_Country
                        CountryName="Ireland"
                        InnerCountryName="Universities in Ireland "
                        InnerCountryContent="<ul>
                        <li>Dundalk Institute of Technology </li>
                      </ul> "
                      />
                    </div>
                    <div
                      className={`${styles.box_02} ${styles.glBox} ${styles.mbileHide}`}
                    >
                      <Custom_Country
                        CountryName="UK"
                        InnerCountryName="Universities in UK "
                        InnerCountryContent="<ul>
                        <li>Keele University</li>
                        <li>University of Plymouth</li>
                        <li>Shefflield Hallam University </li>
                        <li>University of Dundee</li>
                        <li>De Montfort University</li>
                      </ul> "
                      />
                    </div>
                    <div
                      className={`${styles.box_05} ${styles.glBox} ${styles.mbileHide}`}
                    >
                      <Custom_Country
                        CountryName="Australia"
                        InnerCountryName="Universities in Australia "
                        InnerCountryContent="<ul>
                              <li>Deakin University</li>
                              <li>Jame Cook University</li>
                              <li>Torrens University</li>
                              <li>University of Canberra</li>
                              <li>Russo Business School</li>
                              <li>Victoria University</li>
                              <li>Flinders University</li>
                              <li>Western Sydney University</li>
                              <li>Bond University</li>
                              <li>University of New South Wales</li>
                              <li>University of Queensland</li>
                            </ul> "
                      />
                    </div>
                    <div className={`${styles.box_03} ${styles.glBox}`}>
                      <Custom_Country
                        CountryName="Germany"
                        InnerCountryName="Universities in Germany "
                        InnerCountryContent="<ul>
                        <li>
                          International University of Applied Science
                        </li>
                        <li>GISMA Business School</li>
                      </ul>
                      "
                      />
                    </div>
                    <div className={`${styles.box_04} ${styles.glBox}`}>
                      <Custom_Country
                        CountryName="Canada"
                        InnerCountryName="Universities in Canada "
                        InnerCountryContent="<ul>
                        <li>University of Canada West</li>
                        <li>Yorkville University </li>
                        <li>Trinity Western University</li>
                      </ul> "
                      />
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className={`${styles.ContAccordian}`}>
                    <div
                      className={`${styles.box_01} ${styles.glBox} ${styles.mbileHide}`}
                    >
                      <Custom_Country
                        CountryName="USA "
                        InnerCountryName="Universities in USA "
                        InnerCountryContent="<ul>
                        <li>Johnson & Wales University </li>
                        <li>Clark University </li>
                        <li>Yeshiva University</li>
                        <li>Northern Arizona University</li>
                        <li>University of Bridgeport</li>
                        <li>Edgewood College</li>
                        <li>South Dakota State University</li>
                        <li>Golden Gate University</li>
                        <li>Troy University</li>
                      </ul> "
                      />
                    </div>
                    <div
                      className={`${styles.box_02} ${styles.glBox} ${styles.mbileHide}`}
                    >
                      <Custom_Country
                        CountryName="UK"
                        InnerCountryName="Universities in UK "
                        InnerCountryContent="<ul>
                        <li>Keele University</li>
                        <li>University of Plymouth</li>
                        <li>Shefflield Hallam University </li>
                        <li>University of Dundee</li>
                        <li>De Montfort University</li>
                      </ul> "
                      />
                    </div>
                    <div
                      className={`${styles.box_03} ${styles.glBox} ${styles.mbileHide}`}
                    >
                      <Custom_Country
                        CountryName="Germany"
                        InnerCountryName="Universities in Germany "
                        InnerCountryContent="<ul>
                        <li>
                          International University of Applied Science
                        </li>
                        <li>GISMA Business School</li>
                      </ul>
                      "
                      />
                    </div>
                    <div className={`${styles.box_05} ${styles.glBox}`}>
                      <Custom_Country
                        CountryName="Australia"
                        InnerCountryName="Universities in Australia "
                        InnerCountryContent="<ul>
                              <li>Deakin University</li>
                              <li>Jame Cook University</li>
                              <li>Torrens University</li>
                              <li>University of Canberra</li>
                              <li>Russo Business School</li>
                              <li>Victoria University</li>
                              <li>Flinders University</li>
                              <li>Western Sydney University</li>
                              <li>Bond University</li>
                              <li>University of New South Wales</li>
                              <li>University of Queensland</li>
                            </ul> "
                      />
                    </div>
                    <div className={`${styles.box_06} ${styles.glBox} `}>
                      <Custom_Country
                        CountryName="Ireland"
                        InnerCountryName="Universities in Ireland "
                        InnerCountryContent="<ul>
                        <li>Dundalk Institute of Technology </li>
                      </ul> "
                      />
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;

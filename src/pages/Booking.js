import { data } from "../data";

import arrow from "../assets/arrow.png";
import Card from "../components/Card";
import Header from "../components/Header";
import Locationicon from "../components/icons/Locationicon";
import DateIcon from "../components/icons/DateIcon";
import Switch from "../components/Switch";

const Booking = () => {
  return (
    <>
      <Header />
      <div className="booking">
        <div className="back-arrow">
          <img src={arrow} alt="" />
        </div>

        <div className="booking__body">
          <div className="booking__heading">
            <h3>New booking</h3>
            <p>
              Fill in the information to get a quote or create a new booking
            </p>
          </div>
          <div className="section one">
            <h4>Select a service</h4>
            <div className="one__content">
              {data.map((el) => (
                <Card text={el.text} icon={<el.icon />} />
              ))}
            </div>
          </div>

          <div className="section two">
            <div className="two__info-icon">i</div>
            <div className="two__top-form">
              <div className="two__top-form__left">
                <p>Import</p>
                <p>Export</p>
              </div>
              <div className="two__top-form__input">
                <Locationicon />
                <p>From</p>
                <input placeholder="City or Port" />
              </div>
              <div className="two__top-form__input">
                <Locationicon />
                <p>To</p>
                <input placeholder="City or Port" />
              </div>
            </div>
            <div className="two__top-form">
              <div className="two__top-form__input">
                <DateIcon />
                <input placeholder="Ready Date" type="date" />
              </div>

              <div className="two__top-form__input">
                <select>
                  <option>Incoterms</option>
                  <option>Incoterms</option>
                </select>
              </div>
              <div className="two__top-form__input">
                <input placeholder="Total Cargo Value" type="text" />
              </div>
            </div>
          </div>

          <div className="section three">
            <div className="three__top">
              <h3>Cargo Details</h3>
              <div className="three__top-right">
                <Switch />
                <p>Dangerous Cargo (ex. Chemicals,Battery)</p>
              </div>
            </div>
            <div className="three__middle">
              <p className="active">Total Dimensions</p>
              <p>Package Details</p>
            </div>
            <div className="three__end">
              <div className="three__end-input">
                <label>Total Volume</label>
                <input type="text" />
                <p className="three__end-input__prefix">cbm</p>
              </div>

              <div className="three__end-input">
                <label>Total Weight</label>
                <input type="text" />
                <p className="three__end-input__prefix">kg</p>
              </div>
            </div>
          </div>

          <div className="section four">
            <h3>Addition Services</h3>
            <div className="flex-between mb-40">
              <div className="four__content-body">
                <Switch />
                <div className="four__content-body__text">
                  <h4>Export Forwarding</h4>
                  <p>We handle customs clearance and documentation</p>
                </div>
              </div>
              <div className="four__content-body">
                <Switch />
                <div className="four__content-body__text">
                  <h4>Import Customs Clearance</h4>
                  <p>We handle customs clearance and documentation</p>
                </div>
              </div>
            </div>

            <div className="flex-between">
              <div className="four__content-body">
                <Switch />
                <div className="four__content-body__text">
                  <h4>Cargo Insurance</h4>
                  <p>Protect your cargo from logostics risks up to its value</p>
                </div>
              </div>
              <div className="four__content-body">
                <Switch />
                <div className="four__content-body__text">
                  <h4>Transport / Delivery</h4>
                  <p>We deliver the cargo to your doorstep from the ports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;

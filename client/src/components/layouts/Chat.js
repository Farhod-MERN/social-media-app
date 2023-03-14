import React from "react";
import "../../css/chat.css";

export default function Chat() {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div className="container mt-3">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app shadow border text-white bg-dark">
              <div id="plist" className="people-list">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
                <ul className="list-unstyled chat-list mt-2 mb-0">
                  <li className="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="avatar"
                    ></img>
                    <div className="about">
                      <div className="name">Vincent Porter</div>
                      <div className="status">
                        <i className="fa fa-circle offline"></i> left 7 mins ago
                      </div>
                    </div>
                  </li>
                  <li className="clearfix active">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="avatar"
                    ></img>
                    <div className="about">
                      <div className="name">Admin</div>
                      <div className="status">
                        
                        <i className="fa fa-circle online"></i> online
                      </div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="avatar"
                    ></img>
                    <div className="about">
                      <div className="name">Mike Thomas</div>
                      <div className="status">
                        
                        <i className="fa fa-circle online"></i> online
                      </div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="avatar"
                    ></img>
                    <div className="about">
                      <div className="name">Christian Kelly</div>
                      <div className="status">
                        
                        <i className="fa fa-circle offline"></i> left 10 hours ago
                      </div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar8.png"
                      alt="avatar"
                    ></img>
                    <div className="about">
                      <div className="name">Monica Ward</div>
                      <div className="status">
                        
                        <i className="fa fa-circle online"></i> online
                      </div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="avatar"
                    ></img>
                    <div className="about">
                      <div className="name">Dean Henry</div>
                      <div className="status">
                        
                        <i className="fa fa-circle offline"></i> offline since Oct
                        28
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat">
                <div className="chat-header clearfix">
                  <div className="row">
                    <div className="col-6">
                      <a
                        href="/sa"
                        data-toggle="modal"
                        data-target="#view_info"
                      >
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt="avatar"
                        ></img>
                      </a>
                      <div className="chat-about">
                        <h6 className="m-b-0">Admin</h6>
                        <small>Last seen: 2 hours ago</small>
                      </div>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                    <h3><i className="bi bi-three-dots"></i></h3>
                    </div>
                  </div>
                </div>
                <div className="chat-history">
                  <ul className="m-b-0">
                    <li className="clearfix">
                      <div className="message-data text-right">
                        <span className="message-data-time text-right">10:10 AM, Today</span>
                        
                      </div>
                      <div className="message other-message float-right text-white">
                        Hi Admin, how are you? is this chat working?
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="message-data">
                        <span className="message-data-time">10:12 AM, Today</span>
                      </div>
                      <div className="message my-message text-white">
                        Not yet. Application isn't complated yet .
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="message-data">
                        <span className="message-data-time">10:12 AM, Today</span>
                      </div>
                      <div className="message my-message text-white">
                      Please wait for some time
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chat-message clearfix">
                  <div className="input-group mb-0">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-send"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter text here..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

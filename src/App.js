import React, { Component } from 'react';
import './App.css';
var oauth = require('oauth-sign');
var timestamp = Math.round(Date.now() / 1000);
var params = {
  oauth_version: '1.0',
  oauth_nonce: btoa(timestamp),
  oauth_timestamp: timestamp,
  oauth_consumer_key: 'goreact',
  resource_link_title: 'Assignment Name',
  resource_link_id: '038adc12d298f2faa62fcc67134cba5193e01940',
  user_id: "7f0f62435sv43a89e95c01f81",
  roles: "Instructor",
  lis_person_name_given: "John",
  lis_person_name_family: "Doe",
  lis_person_name_full: "John Doe",
  lis_person_contact_email_primary: "jdoe@gmail.com",
  context_id: "bdec785f815ec84930553a6e24ce54deab32dc39",
  context_title: "Course Name",
  lti_version: 'LTI-1p0',
  lti_message_type: 'basic-lti-launch-request',
  tool_consumer_instance_name: "School Name",
  tool_consumer_instance_guid: "9c8d3ae8-171e-4947-b354-796ed4d9d13a",
  oauth_signature_method: 'HMAC-SHA1',
  tool_consumer_info_product_family_code: "LMSname",
};
var signature = oauth.hmacsign('POST', 'https://dev.goreact.com/lti/v1', params, 'goreact');

export default class App extends Component {
 
render(){
  return (
    <div className="App">
<div id="ltiLaunchFormSubmitArea">
<form action="https://dev.goreact.com/lti/v1"
    name="ltiLaunchForm" id="ltiLaunchForm" method="post"
    encType="application/x-www-form-urlencoded">
<input type="text" name="oauth_version" value="1.0"/>
<input type="text" name="oauth_nonce" value={params.oauth_nonce}/>
<input type="text" name="oauth_timestamp" value={params.oauth_timestamp}/>
<input type="text" name="oauth_consumer_key" value="goreact"/>
<input type="text" name="resource_link_title" value="Assignment Name"/>
<input type="text" name="resource_link_id" value="038adc12d298f2faa62fcc67134cba5193e01940"/>
<input type="text" name="user_id" value="7f0f62435sv43a89e95c01f81"/>
<input type="text" name="roles" value="Instructor"/>
<input type="text" name="lis_person_name_given" value="John"/>
<input type="text" name="lis_person_name_family" value="Doe"/>
<input type="text" name="lis_person_name_full" value="John Doe"/>
<input type="text" name="lis_person_contact_email_primary" value="jdoe@gmail.com"/>
<input type="text" name="context_id" value="bdec785f815ec84930553a6e24ce54deab32dc39"/>
<input type="text" name="context_title" value="Course Name"/>
<input type="text" name="lti_version" value="LTI-1p0"/>
<input type="text" name="lti_message_type" value="basic-lti-launch-request"/>
<input type="text" name="tool_consumer_instance_name" value="School Name"/>
<input type="text" name="tool_consumer_instance_guid" value="9c8d3ae8-171e-4947-b354-796ed4d9d13a"/>
<input type="text" name="oauth_signature_method" value="HMAC-SHA1"/>
<input type="text" name="oauth_signature" value={signature}/>
<input type="text" name="tool_consumer_info_product_family_code" value="LMSname"/>
<input type="submit" value="Launch"/>
</form>
</div>
    </div>
  )
}
}
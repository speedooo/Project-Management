import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';
import React from 'react';
import MainLayout from "../../../../client/commonUi/layouts/mainLayout/mainLayout";

FlowRouter.route('/projectdashboard/:projectId',{
  name:'projectdashboard',
  action:function(params){
ReactLayout.render(MainLayout,{content:<Projectdashboard id={params.projectId}/>});
}
});

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel } from './TabPanel';

export default class Aside extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  componentDidMount() {
  }

  onClick = (index, name) => {
    this.setState({selectedIndex: index});
    this.props.onMenuClick(index, name)
  }

  a11yProps = (index) => {
  //a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  render() {
    //const { selectedIndex } = this.state;
    const {
      asidevalue,
      handleAsideValueChange,

      propertySelectedIndex,
      methodSelectedIndex,
      eventSelectedIndex,

      propertyNames,
      properties,
      onPropertyClick,

      methodNames,
      methods,
      onMethodClick,

      eventNames,
      events,
      onEventClick,
    } = this.props;
    return (


      <React.Fragment>


    <div style={{height: '50px'}}>
      <AppBar position="static">
        <Tabs style={{xheight:'5px'}} value={asidevalue} onChange={handleAsideValueChange} aria-label="simple tabs example">
          {/* <Tab label="Examples" {...this.a11yProps(0)} /> */}
          <Tab label="Properties" {...this.a11yProps(0)} />
          <Tab label="Methods" {...this.a11yProps(1)} />
          <Tab label="Events" {...this.a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
    <div style={{flex: '1', display: 'flex', flexDirection: 'column', overflow: 'auto'}}>








      <TabPanel
      style={{display: 'flex',flex:'1',xheight:'5px'}}
      xstyle={{xminHeight:'300px',xmaxHeight:'300px',display:'flex',flex:'1',xflexGrow:'0',xflexShrink:'0',xflexBasis:'auto',overflow:'auto',flexDirection:'column',justifyContent:'space-between'}}
        value={asidevalue}
        index={0}
        names={propertyNames}
        data={properties}
        typeSelectedIndex={propertySelectedIndex}
        onClick={onPropertyClick}
      />
      <TabPanel
        xstyle={{xminHeight:'300px',xmaxHeight:'300px',display:'flex',flexGrow:'0',flexShrink:'0',flexBasis:'auto',overflow:'auto',flexDirection:'column',justifyContent:'space-between'}}

        value={asidevalue}
        index={1}
        names={methodNames}
        data={methods}
        typeSelectedIndex={methodSelectedIndex}
        onClick={onMethodClick}
      />
      <TabPanel
        xstyle={{xminHeight:'300px',xheight:'300px',display:'flex',flexGrow:'1',flexShrink:'0',flexBasis:'auto',overflow:'auto',flexDirection:'column',justifyContent:'space-between'}}

        value={asidevalue}
        index={2}
        names={eventNames}
        data={events}
        typeSelectedIndex={eventSelectedIndex}
        onClick={onEventClick}
      />
    </div>

    </React.Fragment>


    )
  }

}
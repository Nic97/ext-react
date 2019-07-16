import React, { Component } from 'react';
import { Panel, BreadcrumbBar, Component as CMP } from '@sencha/ext-modern';
import fileData from './Files.js'

export default class BreadcrumbToolBarExample extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		this.store = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: fileData
        });
		return (
			<Panel
				docked="top"  
				width="600"
				height="400"
				overflowHandler="scroller"
				bodyPadding="20"
				html="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			>
				<BreadcrumbBar 
					docked="top"
					showIcons= "true"
					store={this.store}
				>
					<CMP 
						html= "Split buttons:"
						style={
							{
								"margin-left": "10px",
								"margin-right": "10px"
							}
						}
					>
					</CMP>
				</BreadcrumbBar>
				<BreadcrumbBar 
					docked="bottom"
					showIcons= "true"
					useSplitButtons="false"
					store={this.store}
				>
					<CMP
						html="Normal buttons:"
						style={
							{
								"margin-left": "10px",
								"margin-right": "10px"
							}
						}
					>
					</CMP>
				</BreadcrumbBar>
			</Panel>
		)
	}
}
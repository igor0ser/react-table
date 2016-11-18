import React, { Component } from 'react';
import './RpTable.css';

class RpTable extends Component {
	constructor(props) {
		super(props);
		console.dir(props);

		const children = props.children;
		const headers = children.filter( item => item.type.name === 'RpHeader');
		const columns = children.filter( item => item.type.name === 'RpColumn');

		console.log(headers);

		this.headers = headers;
		this.columns = columns;
		this.data = props.data;

	}
	render() {
		return (
			<table>
				<thead>
					<tr>
						{ this.headers.map(item => 
							<th>{item.props.children}</th>)
						}
					</tr>
				</thead>
				<tbody>
					{ this.data.map(dataItem => 
						<tr>
							{ this.columns.map(item => 
								<td>{dataItem[item.props.children]}</td>)
							}
						</tr>)
					}
				</tbody>
			</table>
		);
	}
}

export default RpTable;

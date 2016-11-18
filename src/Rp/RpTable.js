import React, { Component } from 'react';
import './RpTable.css';

class RpTable extends Component {
	constructor(props) {
		super(props);
		console.dir(props);
	}
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>
							header123
						</th>
						<th>
							header
						</th>
						<th>
							header
						</th>
						<th>
							header
						</th>
						<th>
							header
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							aaaa
						</td>
						<td>
							aaaa
						</td>
						<td>
							aaaa
						</td>
						<td>
							aaaa
						</td>
						<td>
							aaaa
						</td>
					</tr>
					<tr>
						<td>
							aaaa
						</td>
						<td>
							aaaa
						</td>
						<td>
							aaaa
						</td>
						<td>
							aaaa
						</td>
						<td>
							aaaatr
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default RpTable;

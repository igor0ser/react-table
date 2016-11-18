import React from 'react';
import RpTable from './Rp/RpTable';
import RpHeader from './Rp/RpHeader';
import RpColumn from './Rp/RpColumn';

const array = [
	{ name: 'William', surname: '123', type: 'jockey'},
	{ name: 'Kohn', surname: 'Johnsin', type: 'jockey'},
	{ name: 'Adam', surname: 'Wills', type: 'trainer'},
	{ name: 'Steven', surname: 'Jobs', type: 'owner'},
	{ name: 'Will', surname: 'Smyth', type: 'trainer'}
];

const SomeTable = () => (
	<RpTable data={array}>
		<RpHeader>
			Name
		</RpHeader>
		<RpColumn>
			name
		</RpColumn>
		<RpHeader>
			Surname
		</RpHeader>
		<RpColumn>
			surname
		</RpColumn>
		<RpHeader>
			Profession
		</RpHeader>
		<RpColumn>
			type
		</RpColumn>
	</RpTable>
);

export default SomeTable;

import React from 'react';
import RpTable from './Rp/RpTable';
import RpHeader from './Rp/RpHeader';
import RpColumn from './Rp/RpColumn';

const array = [
	{ name: 'William', surname: '123', type: 'jockey'}
	{ name: 'Kohn', surname: 'Johnsin', type: 'jockey'}
	{ name: 'Adam', surname: 'Wills', type: 'trainer'}
	{ name: 'Steven', surname: 'Jobs', type: 'owner'}
	{ name: 'Will', surname: 'Smyth', type: 'trainer'}
];

const SomeTable = () => (
	<RpTable>
		<RpHeader>
			RpHeader0
		</RpHeader>
		<RpColumn>
			RpColumn0
		</RpColumn>
		<RpHeader>
			RpHeader1
		</RpHeader>
		<RpColumn>
			RpColumn1
		</RpColumn>
		<RpHeader>
			RpHeader2
		</RpHeader>
		<RpColumn>
			RpColumn2
		</RpColumn>
	</RpTable>
);

export default SomeTable;

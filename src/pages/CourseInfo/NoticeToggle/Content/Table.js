import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #333;
    color: #fff;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tbody tr:hover {
    background-color: #e6e6e6;
  }
`;

const TableComponent = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Definition</th>
          <th>Criteria</th>
          <th>Also referred as</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Large Hub</td>
          <td>Receives 1 percent or more of the annual U.S. commercial enplanements</td>
          <td>Primary</td>
        </tr>
        <tr>
          <td>Medium Hub</td>
          <td>Receives 0.25 to 1.0 percent of the annual U.S. commercial enplanements</td>
          <td>Primary</td>
        </tr>
        <tr>
          <td>Small Hub</td>
          <td>Receives 0.05 to 0.25 percent of the annual U.S. commercial enplanements</td>
          <td>Primary</td>
        </tr>
        <tr>
          <td>Nonhub</td>
          <td>Receives less than 0.05 percent but more than 10,000 of the annual U.S. commercial enplanements</td>
          <td>Primary</td>
        </tr>
        <tr>
          <td>Nonprimary Commercial Service, Nonhub</td>
          <td>Also referred to as nonhub nonprimary, these airports have scheduled passenger service and between 2,500 and 10,000 annual enplanements.</td>
          <td>Nonprimary</td>
        </tr>
        <tr>
          <td>Reliever</td>
          <td>An airport designated by the Secretary of Transportation to relieve congestion at a commercial service airport and to provide more general aviation access to the overall community (§47102(23)).</td>
          <td>Nonprimary</td>
        </tr>
        <tr>
          <td>General Aviation</td>
          <td>A public-use airport that does not have scheduled service or has scheduled service with less than 2,500 passenger boardings each year (§47102(8)).</td>
          <td>Nonprimary</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default TableComponent;

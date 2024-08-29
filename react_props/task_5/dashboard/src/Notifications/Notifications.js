import React from 'react';
import './Notifications.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent"><strong>Urgent requirement</strong> - complete by EOD</li>
      </ul>
    </div>
  );
}

export default Notifications;

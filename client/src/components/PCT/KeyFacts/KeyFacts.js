import React from 'react';
import styles from './KeyFacts.module.css';

export default function KeyFacts() {
  return (
    <div className={styles.keyFacts}>
      <h2>Key Stats</h2>
      <table className={styles.myTable}>
        <tr>
          <td>Length</td>
          <td>2652 miles</td>
        </tr>
        <tr>
          <td>Location</td>
          <td>CA/OR/WA</td>
        </tr>
        <tr>
          <td>Highest Point</td>
          <td>Forrester Pass (13,153 ft.)</td>
        </tr>
      </table>
    </div>
  );
}
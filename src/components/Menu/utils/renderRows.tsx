import React  from "react";
import { block } from 'bem-cn';

/**
 * The function wrap node array.
 *
 * @param blockName
 * @param rows
 */
export default function renderRows(blockName: string, rows: React.ReactNodeArray) {
  return rows.map((row, rowId) => (
    <div key={rowId} className={block(blockName)('row')}>
      {row}
    </div>
  ));
}
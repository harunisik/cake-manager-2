import { Spinner } from 'react-bootstrap';

interface HeaderCellProps {
  title?: string;
  width?: string;
  className?: string;
}

export const HeaderCell = ({ width = '', title = '', className = 'text-left' }: HeaderCellProps) => {
  return (
    <th style={{ width }} className={className}>
      {title}
    </th>
  );
};

interface EditCellProps {
  onClick: () => void;
}

export const EditCell = ({ onClick }: EditCellProps) => {
  return (
    <td className="text-center">
      <i className="far fa-edit" style={{ cursor: 'pointer' }} onClick={onClick} />
    </td>
  );
};

interface DeleteCellProps {
  onClick: () => void;
}

export const DeleteCell = ({ onClick }: DeleteCellProps) => {
  return (
    <td className="text-center">
      <i className="far fa-trash-alt" style={{ cursor: 'pointer' }} onClick={onClick} />
    </td>
  );
};

export const SpinnerRow = () => {
  return (
    <tr className="text-center">
      <td colSpan={7} style={{ verticalAlign: 'middle' }}>
        <Spinner size="sm" animation="border" className="mr-1" />
        Data Loding...
      </td>
    </tr>
  );
};

export const NoDataRow = () => {
  return (
    <tr className="text-center">
      <td colSpan={7} style={{ verticalAlign: 'middle' }}>
        <i className="fas fa-database mr-1" />
        No Data.
      </td>
    </tr>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import {
  Divider,
  Link,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core';

function Markdown({
  defaultText,
  text,
  ...props
}) {
  return (
    <ReactMarkdown
      renderers={{
        heading: ({ children, level }) => <Typography variant={`h${level}`}>{children}</Typography>,
        paragraph: ({ children }) => <Typography>{children}</Typography>,
        link: ({ children, href }) => <Link color="primary" href={href} size="small">{children}</Link>,
        table: ({ children, ...props }) => <Table>{children}</Table>,
        tableHead: ({ children, ...props }) => <TableHead>{children}</TableHead>,
        tableBody: ({ children, ...props }) => <TableBody>{children}</TableBody>,
        tableRow: ({ children, ...props }) => <TableRow hover>{children}</TableRow>,
        tableCell: ({ children, isHeader, align, ...props }) => <TableCell align={align || 'inherit'} variant={isHeader ? 'head' : 'body'}>{children}</TableCell>,
        thematicBreak: Divider,
      }}
      source={text || defaultText}
      {...props}
    />
  );
}

Markdown.propTypes = {
  defaultText: PropTypes.string,
  text: PropTypes.string,
};

Markdown.defaultProps = {
  defaultText: '',
  text: '',
};

export default Markdown;

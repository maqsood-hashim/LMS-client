import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', value: 200 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 150 },
  { name: 'Apr', value: 400 },
  { name: 'May', value: 250 },
  { name: 'Jun', value: 350 },
];

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'inline-block',
    width: 250,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    background: 'linear-gradient(to bottom, #4e54c8, #8f94fb)',
    color: '#fff',
  },
  graph: {
    width: '100%',
    height: 100,
    marginTop: theme.spacing(2),
  },
}));

const SmallCard = ({ title, value, description, color }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
        <Typography variant="body2">{description}</Typography>
        <div className={classes.graph}>
          <LineChart width={100} height={100} data={data}>
            <Line type="monotone" dataKey="value" stroke="#fff" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" hide />
            <YAxis hide />
          </LineChart>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmallCard;

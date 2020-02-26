import AWS from 'aws-sdk';

AWS.config.update({region: 'us-east-2'});

const dDBDocClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const params = {
    ExpressionAttributeValues: {
        ':rID': 1,
        ':bRID': 1
    },
    KeyConditionExpression: 'regionID = :rID and bookReviewID = :bRID',
    TableName: 'bookReviews'
};

dDBDocClient.query(params,  (err, data) => {
    if (err) {
        console.error('Error reading DB', err);
    } else {
        console.log(data.Items);
    }
});

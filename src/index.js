exports.handler = async (event) => {
    console.log('Event received:', JSON.stringify(event, null, 2));
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello I am from aws lambda',
            timestamp: new Date().toISOString(),
            event: event
        }),
    };
    
    return response;
};
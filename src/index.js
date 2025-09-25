exports.handler = async (event) => {
    console.log('Event received:', JSON.stringify(event, null, 2));
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World I am Vicky,CICD pipeline testing - TRIGGER TEST',
            timestamp: new Date().toISOString(),
            event: event
        }),
    };
    
    return response;
};
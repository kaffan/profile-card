export async function ProfileData(){
    const response = await fetch('https://dev.elred.io/noSessionProfileDetails?userCode=66961e8dcc9a8155d09b8c9b',{
        method: 'POST'
    });
    const data = await response.json();
    const result = data['result'];
    return result;
}
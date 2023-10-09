// Please read the README.md to understand what to do. Happy Coding !
async function fetchUserData() {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const usersData = await response.json();
        

        //Unfinished Method .map
        // const SelectedUsersData = usersData.map(newData => {
        //         return {newData.name,
        //             newData.Username,}
        //     });
        

        const filterData = usersData.filter((data) => {
            if(data.email.endsWith('biz')){
                return data;
            }
        });
        console.log(filterData);

        const sortedUserData = function (usersData){
            usersData.sort(function (a, b) {
                if (a.name < b.name) {
                return -1;
                }
                if (a.name > b.name) {
                return 1;
                }
                return 0;
            });
            console.log(usersData);
        }
        console.log(sortedUserData(usersData));
    }catch(error){
        console.log("Error!")
    }

    return true //usersData;
}

fetchUserData().then(usersData => console.log(usersData));
export const userNameShortener = (userName)=>{
    const splitedUserName = userName.split("");
    const shorterUserName = `...${splitedUserName[0]}${splitedUserName[1]}${splitedUserName[2]}${splitedUserName[3]}${splitedUserName[4]}${splitedUserName[5]}${splitedUserName[6]}
    `;
    return shorterUserName;
}
export const isLiked = (state , id) => {
    const currentItem = state.find(item => item.id === id);
    return !!currentItem.like;
}
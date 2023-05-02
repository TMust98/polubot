module.exports = (guild = {id: "!", name: "!"}) => {
    return {
        id: guild.id,
        name: guild.name,
        members: {}, //Удалять запрещаю!
        prefix: "p!" //Префикс по умолчанию. 
    };
};
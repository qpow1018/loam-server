const CollectionName = {
  characters: 'characters',
  users: 'users',
}
Object.freeze(CollectionName);

const ModelName = {
  character: 'Character',
  user: 'user',
}
Object.freeze(ModelName);

const EnumUserType = {
  default: 'default',
  admin: 'admin',
}
Object.freeze(EnumUserType);

module.exports = {
  CollectionName,
  ModelName,
  EnumUserType,
}
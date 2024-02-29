const { api, auth, checker } = require('../libs');
const dao = require('../db/character/characterDAO');

module.exports = (app) => {
  app.get   ('/api/my-character', getMyCharacters);
  app.post  ('/api/my-character', createMyCharacter);
}

// TODO auth 추가
async function getMyCharacters(req, res, next) {
  await api.defaultProcess(req, res, next, async () => {
    return await dao.getMyCharacters(category, search);
  });
}

async function createMyCharacter(req, res, next) {
  await api.defaultProcess(req, res, next, async () => {
    const { name } = req.body;

    checker.checkRequiredStringParams(name);

    await dao.createMyCharacter(name);
  });
}



// async function updateProduct(req, res, next) {
//   await api.defaultProcess(req, res, next, async () => {
//     const { id } = req.params;
//     const { name, originPrice, discountRate, tier1Category, tier2Category } = req.body;
//     const { thumbnail, descriptions } = req.files;

//     checker.checkRequiredStringParams(id);
//     checker.checkOptionalStringParams(name, tier1Category);
//     checker.checkOptionalPositiveIntegerParams(originPrice);
//     checker.checkOptionalPositiveIntegerOrNullParams(discountRate);
//     checker.checkOptionalStringOrNullParams(tier2Category);
//     checker.checkOptionalImageFileArrayParams(thumbnail, descriptions);

//     let _thumbnailFile = null;
//     if (thumbnail !== undefined && thumbnail.length !== 0) {
//       _thumbnailFile = thumbnail[0];
//       checker.checkMaximumMBFileSize(5, _thumbnailFile.size);
//     }

//     if (descriptions !== undefined && descriptions.length !== 0) {
//       descriptions.forEach(item => {
//         checker.checkMaximumMBFileSize(10, item.size);
//       });
//     }

//     await dao.updateProduct(id, name, originPrice, discountRate, tier1Category, tier2Category, _thumbnailFile, descriptions);
//   });
// }

// async function deleteProduct(req, res, next) {
//   await api.defaultProcess(req, res, next, async () => {
//     const { id } = req.params;

//     checker.checkRequiredStringParams(id);

//     await dao.deleteProduct(id);
//   });
// }
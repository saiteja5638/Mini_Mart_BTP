using app.interactions from '../db/interactions';
service CatalogService {

 entity PLANTS
    as projection on interactions.PLANTS;


}

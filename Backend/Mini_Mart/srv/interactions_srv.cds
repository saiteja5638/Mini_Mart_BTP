using interactions from '../db/interactions';

service MINI_MART {

    entity PLANTS        as projection on interactions.PLANTS;
    entity PLANT_DETIALS as projection on interactions.PLANT_DETIALS;
}

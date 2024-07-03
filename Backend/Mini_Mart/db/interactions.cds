context interactions {
    entity PLANTS {
        key PLANT_ID     : String;
            PLANT_NAME   : String;
            PLANT_LOC    : String;
            PLANT_AVATAR : String;
            PLAT_DET     : Composition of many PLANT_DETIALS
                               on PLAT_DET.PLANT_D = $self;
    }

    entity PLANT_DETIALS {
        key ID               : String;
            PLANT_D          : Association to PLANTS;
            PLANT_CONT       : String;
            PLANT_EMAIL      : String;
            PLANT_HEAD       : String;
            PLANT_REVENUE    : String;
            PLANT_CUST_COUNT : String;
    }
}

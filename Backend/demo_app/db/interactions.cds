namespace app.interactions;

entity PLANTS {
    key PLANT_ID         : String;
        PLANT_NAME       : String;
        PLANT_LOC        : String;
        PLANT_AVATAR     : String;
        PLANT_CONT       : String;
        PLANT_EMAIL      : String;
        PLANT_HEAD       : String;
        PLANT_REVENUE    : String;
        PLANT_CUST_COUNT : String;
}

entity Employees {
    key ID          : UUID;
        Name        : String(100);
        Email       : String(100);
        PhoneNumber : String(15);
        Address     : String(255);
        Role        : String(50);
        Salary      : Decimal(15, 2);
        HireDate    : String;
        Branch      : String;
        experiences : Composition of many EmployeeExperience
                          on experiences.EmployeeID = $self;
}

entity EmployeeExperience {
    key ID               : UUID;
        EmployeeID       : Association to Employees;
        CompanyName      : String(100);
        Role             : String(50);
        StartDate        : String;
        EndDate          : String;
        Responsibilities : String(1000);
}

entity Customers {
    key ID               : UUID;
        Name             : String(100);
        Email            : String(100);
        CONTACT           : String(10);
        PurchasedTillNow : Decimal(15, 2);
        Branch           : String;
        purchases        : Composition of many CustomerPurchases
                               on purchases.CustomerID = $self;
}

entity CustomerPurchases {
    key ID           : UUID;
        CustomerID   : Association to Customers;
        ItemName     : String(100);
        ItemCost     : Decimal(15, 2);
        PurchaseDate : String;
}

entity MaterialManagement {
    key ID              : UUID;
        PRODUCT_NAME : String(40);
        PRODUCT_DESC :String(40);
        CUR_DEALER :String(20);
        AVATAR:String;
        QUAN_AVAIL:String(10);
        QUAN_INFORM : Composition of many QUAN_INFO on QUAN_INFORM.MAT_QUAN = $self;
        DEALERS_INFO : Composition of many DEALERS on DEALERS_INFO.DEAL_MAT = $self;  
}

entity QUAN_INFO {
    key ID : String(32);
        MAT_QUAN : Association to MaterialManagement;
        BRANCH:String(10);
        QUAN_AVAIL:String(10);
        ACT_PRICE:String(10);
        SEL_PRICE:String(10);
        MARGIN:String(10);

}

entity DEALERS {
    key ID :String(32);
        DEAL_MAT : Association to MaterialManagement;
        NAME : String(32);
        LOCATIION:String(30);
        PRICE:String(10);
        SEL_PRICE:String(10);
        MARGIN:String(10);
        CONTACT:String(10);     
}

entity Sales {
   key ID:String(40);
       PLANT_NAME:String(10);
       ItemName :String(20);
       QUAN:String(20);
       REVENUE:String;
       LEVEL:String(10);
       EXPECTED :String(10);
       DURATION :String(30);

}

entity User_Data {
    key ID         : UUID;
        USER_NAME  : String(40);
        USER_EMAIL : String(40);
        USER_CONT  : String(15);
        USER_PASS  : String(40);
}

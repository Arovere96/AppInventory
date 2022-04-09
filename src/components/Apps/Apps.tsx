export class App {
    id: number
    name: string
    urlApp: string
    urlLogo: string
    subTitle: string
    functionality: number
    applicability: number
    originality: number
    ease: number
    views: number
    likes: number
    description: string
    categories: string[]
    tags: string[]
    typology: string[]
    Sign_up_to_create_products: string
    Sign_up_to_access_artefacts: string
    Registration_notes: string
    Plan_and_Pricing: string
    Free_plan_limits: string
    Catalog_of_user_contents: string
    Available_in_Italian_language: string
    Advertisement: string
    Complexity: number
    Bloom_level: string[]
    Documentation: string[]
    Product_examples: string[]
    Specific_subjects: string[]
    urlPresentazione: string
    urlTutorial: string
    presentation: string[]
    score: number

    constructor(
        id: number,
        name: string,
        urlApp: string,
        urlLogo: string,
        subTitle: string,
        functionality: number,
        applicability: number,
        originality: number,
        ease: number,
        views: number,
        likes: number,
        description: string,
        categories: string[],
        tags: string[],
        typology: string[],
        Sign_up_to_create_products: string,
        Sign_up_to_access_artefacts: string,
        Registration_notes: string,
        Plan_and_Pricing: string,
        Free_plan_limits: string,
        Catalog_of_user_contents: string,
        Available_in_Italian_language: string,
        Advertisement: string,
        Complexity: number,
        Bloom_level: string[],
        Documentation: string[],
        Product_examples: string[],
        Specific_subjects: string[],
        urlPresentazione: string,
        urlTutorial: string,
        presentation: string[],
        score: number,
    ) {
        this.id = id;
        this.name = name;
        this.urlApp = urlApp;
        this.urlLogo = urlLogo;
        this.subTitle = subTitle;
        this.functionality = functionality;
        this.applicability = applicability;
        this.originality = originality;
        this.ease = ease;
        this.views = views;
        this.likes = likes;
        this.description = description;
        this.categories = categories;
        this.tags = tags;
        this.typology = typology;
        this.Sign_up_to_create_products = Sign_up_to_create_products;
        this.Sign_up_to_access_artefacts = Sign_up_to_access_artefacts;
        this.Registration_notes = Registration_notes;
        this.Plan_and_Pricing = Plan_and_Pricing;
        this.Free_plan_limits = Free_plan_limits;
        this.Catalog_of_user_contents = Catalog_of_user_contents;
        this.Available_in_Italian_language = Available_in_Italian_language;
        this.Advertisement = Advertisement;
        this.Complexity = Complexity;
        this.Bloom_level = Bloom_level;
        this.Documentation = Documentation;
        this.Product_examples = Product_examples;
        this.Specific_subjects = Specific_subjects;
        this.urlPresentazione = urlPresentazione;
        this.urlTutorial = urlTutorial;
        this.presentation = presentation;
        this.score = score;
    }
}

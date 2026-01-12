export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          price: number;
          image: string | null;
          created_at: string;
        };
        Insert: {
          name: string;
          description?: string | null;
          price: number;
          image?: string | null;
        };
      };
    };
  };
};

export type Product = Database["public"]["Tables"]["products"]["Row"];
export type ProductInsert = Database["public"]["Tables"]["products"]["Insert"];

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto text-center shadow-medium">
          <CardContent className="p-12">
            <div className="mb-8">
              <div className="text-8xl font-bold text-primary mb-4">404</div>
              <h1 className="text-3xl font-bold mb-4">Oops! Page Not Found</h1>
              <p className="text-muted-foreground text-lg mb-2">
                The page you're looking for doesn't exist.
              </p>
              <p className="text-muted-foreground">
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-primary">
                  <Link to="/">
                    <Home className="h-4 w-4 mr-2" />
                    Go Home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/shop">
                    Shop Collection
                  </Link>
                </Button>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="ghost" 
                  onClick={() => window.history.back()}
                  className="text-muted-foreground hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Need help? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default NotFound;

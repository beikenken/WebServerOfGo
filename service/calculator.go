package service
import (
	"html/template"
	"net/http"
)
func calculatorPage(w http.ResponseWriter, req *http.Request) {
	page := template.Must(template.ParseFiles("templates/calculator.html"))
	page.Execute(w, nil)
}
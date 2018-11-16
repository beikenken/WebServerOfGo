package service

import (
	"net/http"
)

// Error Page
func unknownPage(reqw http.ResponseWriter, req *http.Request) {
	http.Error(reqw, "504 Not Implemented!", 504)
}

package main

import (
	"os/exec"
	"net/http"
	"encoding/json"
	"log"
)

type Payload struct {
	Ref,After,Before,Compare string
	Created,Deleted,Forced bool
	Commits []Commit
	HeadCommit Commit
	Repository Repository
	Pusher Author
}

type Repository struct {
	Id,Watchers,Stargazers,Forks,Size,OpenIssues,CreatedAt,PushedAt int
	Name,Url,Description,Language,MasterBranch string
	Fork,Private,HasIssues,HasDownloads,HasWiki bool
}

type Author struct {
	Name,Email,Username string
}

type Commit struct {
	Id,Message,Timestamp,Url string
	Distinct bool
	Author,Commiter Author
	Added,Removed,Modified []string
}

func pushHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST":
		decoder := json.NewDecoder(r.Body)
		out := &Payload{}
		decoder.Decode(out)
		repo := out.Repository.Name
		if repo == "" {
			return
		}
		cwd := "/home/webmaster/" + repo
		gitPull := exec.Command("/usr/bin/git", "pull")
		hugo := exec.Command("/home/webmaster/hugo","-s",cwd)
		gitPull.Dir = cwd
		hugo.Dir = cwd
		err := gitPull.Run()
		if err != nil {
			panic(err)
		}
		log.Println("Git ran successfully!")
		err = hugo.Run()
		if err != nil {
			panic(err)
		}
		log.Println("Hugo ran successfully!")
	default:
	}
}

func main() {
	http.HandleFunc("/", pushHandler)
	log.Fatal(http.ListenAndServe(":8080",nil))
}
